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
        <form className="flex flex-col space-y-2 w-fit">
          <div className="flex space-x-2">
            <input
              id="search-term"
              name="search-term"
              placeholder="type search here..."
              style={{ border: "1px solid black" }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={resetSearch}>Reset Search</button>
          </div>

          <p>Searching for: {searchTerm}</p>
        </form>
      </div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>City</th>
            <th>Degree</th>
            <th>Specialties</th>
            <th>Years of Experience</th>
            <th>Phone Number</th>
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
