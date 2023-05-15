// [Bài tập] Tạo Element thể hiện bảng thông tin các sinh viên trong lớp học

import './index.css'
import React from 'react';

const students = [
    {
        company: 'Alfreds Futterkiste',
        contact: 'Maria Anders',
        country: 'Germany'
    },
    {
        company: 'Centro comercial Moctezuma',
        contact: 'Francisco Chang',
        country: 'Mexico'
    },
    {
        company: 'Ernst Handel',
        contact: 'Roland Mendel',
        country: 'Austria'
    },
    {
        company: 'Island Trading',
        contact: 'Helen Bennett',
        country: 'UK'
    },
    {
        company: 'Laughing Bacchus Winecellars',
        contact: 'Yoshi Tannamuri',
        country: 'Canada'
    },
    {
        company: 'Magazzini Alimentari Riuniti',
        contact: 'Giovanni Rovelli',
        country: 'Italy'
    }
]

const Student = () => {
    return (
        <div>
            <table className="table table-striped table-bordered table-hover">
                <tr>
                    <th>Company Name</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
                {students.map(student => (
                    <tr>
                        <td>{student.company}</td>
                        <td>{student.contact}</td>
                        <td>{student.country}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
};

export default Student;



