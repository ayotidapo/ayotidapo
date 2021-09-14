import ContactForm from "../../components/contact";

const Contact = () => {
  return (
    <>
      <ContactForm />
    </>
  );
};
export default Contact;

export async function getServerSideProps(context) {
  console.log(123, "00000");

  return {
    props: {
      selectedEvent: "2",
    },
  };
}
