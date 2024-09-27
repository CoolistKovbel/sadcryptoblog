"use server";

import dbConnect from "./db";

import { sendMail } from "./mail";

// TODO: UDATE
export async function whiteList(formData: FormData) {
  const email = formData.get("email");

  try {
    await dbConnect();

    console.log(email)

    return { status: "successfully added" };
  } catch (error) {
    console.log(error);
    return {
      status: "Seems like theres an issue trying to add you, contact me...",
    };
  }
}

export async function ContactEmail(
  prevState: string | object | undefined,
  formData: FormData
) {
  const data = Object.fromEntries(formData.entries());

  try {
    const { to, name, subject, content } = data;

    await sendMail({
      to: process.env.SMTP_EMAIL as string,
      name: name as string,
      subject: subject as string,
      content: `${content as string} +++++ ${name}`,
    });

    return {
      message: `${name}-----${to}---- your message has been sent, if you cant wait... call`,
    };
  } catch (error) {
    console.log(error);
    return { message: "I am sorry but the request failed.... you got denied" };
  }
}
