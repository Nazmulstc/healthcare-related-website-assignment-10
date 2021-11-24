import Imaging from "./Imaging/Imaging";
import Pathology from "./Pathology/Pathology";
import Pharmacy from "./Pharmacy/Pharmacy";
import "./Services.css";

const Services = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center">
        <div className="col-md-10">
          <h2>We Are Here To Serve You</h2>
          <p>
            We have more than 2000 services to offer you in our different
            branches at very resonable cost with quick support. To know the
            details about our service details and pricing, you can see our
            detail price list in just one click.
          </p>
        </div>
      </div>
      <Imaging></Imaging>
      <Pathology></Pathology>
      <Pharmacy></Pharmacy>
    </div>
  );
};

export default Services;
