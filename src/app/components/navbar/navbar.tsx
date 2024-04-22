import Link from 'next/link';
import styles from '@/app/components/navbar/navbar.module.css'
export default function Navbar() {
    return (
        <div className={styles.mainContainer}>
            <nav className={styles.nav}>
                <ul>
                    <Link href="/">Home</Link>
                </ul>
                <ul>
                    <Link href="/create-expense">Add expense</Link>    
                </ul>
                <ul>
                    <Link href="/upload-expense">Upload Expense</Link>
                </ul>
                <ul>
                    <Link href="/report">Report</Link>
                </ul>
            </nav>
        </div>
    )
}