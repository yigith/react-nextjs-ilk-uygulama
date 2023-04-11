export default function Gordum(props) {
    const stil = {
        border: "3px dashed black",
        margin: "5px 0",
        backgroundColor: "#f0f0f0",
        padding: "5px",
        display: "flex",
        justifyContent: "space-between"
    };

    return (
        <p style={stil}>
            Ben {props.deger} gördüm.
            <span>👁</span>
        </p>
    )
}