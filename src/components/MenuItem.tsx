function MenuItem({ icon, title, onClick }) {
    return (
    <>

    <div 
        onClick={onClick}
        style={{
        display: "flex",
        alignItems: "center",
        padding: "12px",
        borderBottom: "1px solid #eee",
        cursor: "pointer"
        }}
    >
        <span style={{ marginRight: "10px" }}>{icon}</span>
        <span>{title}</span>
    </div>
    </>
    );



}

export default MenuItem