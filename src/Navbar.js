const Navbar = (props) => {
    return (  
        <nav className="navbar">
            <h1>{props.title} </h1>
            <div className="links">
                <a href="/create"style={{
                    color: 'orange',
                    background:'purple',
                    borderRadius: '12px',
                }}>Home</a>
                <a href="/create" style={{
                    color: "orange",
                    background:"purple",
                    borderRadius: '12px',
                }}>New Blog</a>
            </div>
        </nav>
    );
}
 
export default Navbar;