"use client";

import { useEffect, useState } from "react";

type Advocate = {
  firstName: string;
  lastName: string;
  city: string;
  degree: string;
  specialties: string[];
  yearsOfExperience: number;
  phoneNumber: number;
};

export default function Home() {
  const [advocates, setAdvocates] = useState<Advocate[]>([]);
  const [filteredAdvocates, setFilteredAdvocates] = useState<Advocate[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    console.log("fetching advocates...");
    const fetchAdvocates = async () => {
      try {
        const res = await fetch("/api/advocates");
        const { data } = await res.json();
        setAdvocates(data);
        setFilteredAdvocates(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchAdvocates();
  }, []);

  useEffect(() => {
    const filterAdvocates = () => {
      console.log("filtering advocates...");
      const filteredAdvocates = advocates.filter((advocate) => {
        return (
          advocate.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          advocate.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          advocate.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
          advocate.degree.toLowerCase().includes(searchTerm.toLowerCase()) ||
          advocate.specialties.some((speciality) =>
            speciality.toLowerCase().includes(searchTerm),
          ) ||
          advocate.yearsOfExperience.toString().includes(searchTerm)
        );
      });

      setFilteredAdvocates(filteredAdvocates);
    };
    filterAdvocates();
  }, [searchTerm, advocates]);

  const resetSearch = () => {
    setFilteredAdvocates(advocates);
    setSearchTerm("");
  };

  return (
    <main className="m-[24px]">
      <h1 className="text-4xl font-bold">Solace Advocates</h1>
      <div className="my-10 space-y-4">
        <h2 className="text-2xl font-semibold">Search</h2>
        <form
          className="flex flex-col space-y-2 w-fit"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex space-x-2">
            <input
              id="search-term"
              name="search-term"
              placeholder="type search here..."
              className="p-1 border border-solid border-black"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="button"
              className="px-3 border border-solid border-black"
              onClick={resetSearch}
            >
              Reset Search
            </button>
          </div>

          <p>Searching for: {searchTerm}</p>
        </form>
      </div>
      <table>
        <thead>
          <tr>
            <th className="min-w-[100px] text-left">First Name</th>
            <th className="min-w-[100px] text-left">Last Name</th>
            <th className="min-w-[150px] text-left">City</th>
            <th className="min-w-[100px] text-left">Degree</th>
            <th className="min-w-[600px] text-left">Specialties</th>
            <th className="min-w-[175px] text-left">Years of Experience</th>
            <th className="min-w-[100px] text-left">Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {filteredAdvocates.map((advocate) => (
            <tr key={advocate.phoneNumber}>
              <td>{advocate.firstName}</td>
              <td>{advocate.lastName}</td>
              <td>{advocate.city}</td>
              <td>{advocate.degree}</td>
              <td>
                {advocate.specialties.map((s) => (
                  <div key={s}>{s}</div>
                ))}
              </td>
              <td>{advocate.yearsOfExperience}</td>
              <td>{advocate.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
