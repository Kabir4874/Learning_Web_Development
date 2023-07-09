import Button from "../Button/Button";
import style from "./ContactForm.module.css";
import { MdOutlineMessage, MdOutlineCall } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";

const ContactForm = () => {
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
  };

  return (
    <section className={`${style.container} `}>
      <div className={style.contact_form}>
        <div className={style.top_btn}>
          <Button
            text={"via support chat"}
            icon={<MdOutlineMessage size={24} />}
          />
          <Button text={"via Call"} icon={<MdOutlineCall size={24} />} />
        </div>
        <Button
          isOutLine={true}
          text={"via email form"}
          icon={<AiOutlineMail size={24} />}
        />

        <form action="" onSubmit={onSubmit}>
          <div className={style.form_container}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={style.form_container}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={style.form_container}>
            <label htmlFor="text">Text</label>
            <textarea name="text"></textarea>
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button text={"Submit"} />
          </div>
        </form>
      </div>
      <div className={style.contact_img}>
        <img src="../../../public/image/contact.svg" alt="" />
      </div>
    </section>
  );
};

export default ContactForm;
