import db from "@/app/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      childName, sex, birthday, age, address, firstLanguage, secondLanguage,
      guardian, relationship, guardianContact, motherName, motherAddress, motherWork, motherContact,
      fatherName, fatherAddress, fatherWork, fatherContact, emergencyName, emergencyContact, emergencyWork, signature
    } = body;

    const query = `
      INSERT INTO students (child_name, sex, birthday, age, address, first_language, second_language,
      guardian, relationship, guardian_contact, mother_name, mother_address, mother_work, mother_contact,
      father_name, father_address, father_work, father_contact, emergency_name, emergency_contact, emergency_work, signature)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const values = [
      childName, sex, birthday, age, address, firstLanguage, secondLanguage,
      guardian, relationship, guardianContact, motherName, motherAddress, motherWork, motherContact,
      fatherName, fatherAddress, fatherWork, fatherContact, emergencyName, emergencyContact, emergencyWork, signature
    ];

    const [result] = await db.execute(query, values);

    return NextResponse.json({ message: "Enrollment submitted!", id: result.insertId });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ error: "Error submitting form" }, { status: 500 });
  }
}
