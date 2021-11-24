import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Cart from "./Cart";

const Departments = () => {
  const [department, setDepartment] = useState([]);
  console.log(department);
  useEffect(() => {
    fetch("./department.json")
      .then((res) => res.json())
      .then((data) => setDepartment(data));
  }, []);
  return (
    <div className="container">
      <h1 className="text-center my-5">Our Departments</h1>

      <Row xs={1} md={4} className="g-4 mb-5 border border-radius-5">
        {department.map((department) => (
          <Cart department={department} key={department.Id}></Cart>
        ))}
      </Row>
      <div>
        <h1 className="text-center">আমাদের বিশেষায়িত ইউরোলজি ইউনিটের সেবা</h1>
        <hr className="text-danger" />
        <div className="row my-5">
          <div className="col-md-6">
            <li>
              বিনা/স্বল্প রক্তপাতে কিডিনি পাথরের অত্যাধুনিক লেজার চিকিৎসা (RIRS,
              PCNL, URS)
            </li>
            <li>
              প্রোষ্টেট গ্ল্যান্ডের অপারেশন (TURP, HOLEP, RADICAL PROSTATECTOMY)
            </li>
            <li>প্রস্রাবথলীর টিউমার (TURBT), পাথর এবং গঠনগত ত্রুটির অপারেশন</li>
            <li>
              প্রস্রাবের রাস্তা সরু হয়ে যাওয়া, ছিড়ে যাওয়া, জন্মগত ত্রুটি,
              পুরুষাঙ্গ বাকা থাকা
            </li>
            <li>
              পুরুষ ও মহিলাদের হাঁচি-কাশি দিলে অথবা সব সময় প্রস্রাব ঝরে পড়া
              রোগের চিকিৎসা
            </li>
          </div>
          <div className="col-md-6">
            <li>ইউরো-অনকোলজিক্যাল সার্জারি</li>
            <li>পুরুষত্বহীনতা ও বন্ধ্যাত্ব রোগের চিকিৎসা</li>
            <li>মিনিমালি ইনভেসিভ ও এন্ডোস্কপিক সার্জারি</li>
            <li>
              কিডনি পাথর, টিউমার, কিডনি নালীর পাথর ও টিউমার, প্রস্রাবথলীর
              টিউমার, কিডনি নষ্ট হয়ে যাওয়া
            </li>
            <li>কিডনি ফেইল্যুর রোগীদের জন্য AV Fistula অপারেশন</li>
            <li>
              পিত্তথলী, এ্যাপেন্ডিক্স, কিডনি ও মুত্রনালীর ল্যাপারোস্কপিক
              সার্জারি
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Departments;
