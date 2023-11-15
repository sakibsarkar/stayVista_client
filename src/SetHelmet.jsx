import { Helmet } from "react-helmet";

const SetHelmet = ({ title }) => {
    return (
        <Helmet>
            <title>{`StayVista | ${title}`}</title>
        </Helmet>
    );
};

export default SetHelmet;