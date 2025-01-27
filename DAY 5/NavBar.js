
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Invoices from './invoices'
import Expenses from './expenses'

export default function NavBar() {
    return (
        <BrowserRouter>
        <h1>Book Keeper</h1>
        <ul style={{ listStyle: "none", display: "flex"}}>
            <li><Link to="/invoices">Invoices</Link></li>
            <h>|</h>
            <li><Link to="/expenses">Expenses</Link></li>
        </ul>
        <Routes>
        <Route path="/invoices" element={<Invoices />} />
        <Route path="/invoices/:Id" element={<Invoices />} />
        <Route path="/expenses" element={<Expenses />} />
        </Routes>
        </BrowserRouter>
    )
}