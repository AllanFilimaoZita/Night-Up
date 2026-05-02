function Section({ title, children }) {
        return (
    <>    <div style={{ marginBottom: "20px" }}>
        <h3 style={{ color: "#666" }}>{title}</h3>
        <div style={{ background: "#fff", borderRadius: "8px" }}>
        {children}
        </div>
    </div>

    </>
    );
}

export default Section