import { Home } from "../components/pages/Home";
import "antd/dist/antd.css";

// TODO: index nabayad login bashe bayad safheye asli bashe va baraye login bayad safheye joda dasht
export const getServerSideProps = (context) => {
  const token = context.req.cookies.token;
  if (!token) {
    return {
      redirect: {
        destination: "/",
        persistent: false,
      },
    };
  }
  return {
    props: {
      isLogged: true,
    },
  };
};
const HomePage = () => {
  return <Home />;
};
export default HomePage;
