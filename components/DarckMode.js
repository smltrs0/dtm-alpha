export default function DarckMode() {
    return (
        <>
            {/*  on click set dark mode */}
            <button className="btn btn-outline-dark" onClick={() => {
                localStorage.setItem('darkMode', 'true');
                setDarkMode(true);
            }}>Dark mode</button>
            
        </>
    );
}