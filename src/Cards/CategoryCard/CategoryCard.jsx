import "./CategoryCard.css";

const CategoryCard = ({ label, icon: Icon, setCategory, category }) => {
    const activeStyle = {
        color: "#ff2b4f",
        fontWeight: 600
    }
    return (
        <div className="categoryCard" style={category == label ? activeStyle : {}} onClick={() => setCategory(label)}>
            <Icon />
            <p>{label}</p>
        </div>
    );
};

export default CategoryCard;

