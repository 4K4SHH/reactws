import { createClient } from "@supabase/supabase-js";
import {useState} from "react"
const supabase = createClient(
    'https://zbtkolnmmubsxzohgukv.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpidGtvbG5tbXVic3h6b2hndWt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ5MTkyMjIsImV4cCI6MjAwMDQ5NTIyMn0.AsFo7oJTF9BiAj625FtuLW9I4VxairKxYafyLgNC57E'
)
export default function student() {
    const [studentId , setStudentId] = useState("");
    const [studentDetails, setStudentDetails] = useState({})
    function updateStudentId(event)
    {
        setStudentId(event.target.value);
    }
    async function getStudentDetails()
    {
        const {data} = await supabase
        .from("students")
        .select()
        .eq("student_id", studentId)
        .single()

        setStudentDetails(data)
    }
    return(
    <div>
        <h1>Student Details</h1>
        <input
            type="text"
            onChange={updateStudentId}
            placeholder="Student ID" />
        <input
        type="button"
        onClick={getStudentDetails}
        value="search" />
        {studentDetails?<div>{studentDetails.student_name}</div>:null}
        {studentDetails?<div>{studentDetails.marks}</div>:null}
    </div>
    )
}