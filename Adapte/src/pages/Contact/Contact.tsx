
import people from "../../assets/people-working-together-animation-studio.jpg"
import RegistrationSection from "../../Components/Registration/Registration";

const Contact = () => {
  return (
    <section
      className="flex flex-col
      md-min:justify-between pt-10 pb-10 h-full bg-white mt-[47px] 
      pr-4 pl-4 gap-5 md-min:rounded-lg"
      id="contact"
    >
      <div className="flex flex-col gap-3  text-left ">
        <h1 className="text-3xl font-bold">CONTACTE-NOS</h1>
      </div>
      <div
      className="md-min:flex md-min:flex-row md-min:gap-5 "
      >
        <div className="md-min:w-full">
          <RegistrationSection/>
        </div>
        <div className="md-max:hidden">

        <img src={people} className="" />
        </div>
      </div>
    </section>
  );
};
export default Contact;
