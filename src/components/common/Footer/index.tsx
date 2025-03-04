import { useForm, SubmitHandler } from "react-hook-form";
import { SendMail } from "../../../lib/api";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

type contactType = {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  address: string;
};

function Footer() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<contactType>();

  const mutateSendMail = useMutation({
    onMutate: () => {
      setIsSubmitting(true);
    },
    mutationFn: (data: any) => {
      const response = SendMail(data);
      return response;
    },
    onSettled: () => {
      setIsSubmitting(false);
      reset();
    },
  });
  const onSubmit: SubmitHandler<contactType> = (data) =>
    mutateSendMail.mutate(data);
  return (
    <div className="bg-transparent" id="contact">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-screen-lg mx-auto py-10 sm:py-30 px-4">
        <div className="text-center md:text-start">
          <h2 className="text-4xl text-[#918272] font-semibold">Contact Us</h2>

          <ul className="space-y-3 sm:space-y-5 text-center md:text-start pt-3 sm:pt-0">
            <li className="text-[#7C7062]">
              500 Terry Francine Street San Francisco, CA 94158
            </li>
            <li className="text-[#7C7062]">info@mysite.com</li>
            <li className="text-[#7C7062]">123-456-7890</li>
          </ul>
          <p className="hidden sm:block text-[#7C7062] pt-5 sm:pt-10 text-sm font-semibold">
            ©2025 designed and developed by{" "}
            <a href="https://github.com/KavyaSunithaVijayan" target="_blank">
              Kavya Vijayan
            </a>
          </p>
        </div>
        <div className="w-full lg:col-span-2">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="col-span-1">
              <label className="text-[#7C7062]">First Name</label>{" "}
              <input
                {...register("firstName")}
                className="border-b-1 border-[#7C7062] mt-5 w-full focus:outline-none"
              />
            </div>
            <div className="col-span-1">
              <label className="text-[#7C7062]">Last Name</label>{" "}
              <input
                {...register("lastName")}
                className="border-b-1 border-[#7C7062] mt-5 w-full focus:outline-none"
              />
            </div>
            <div className="pt-3 sm:col-span-2 w-full">
              <label className="text-[#7C7062]">Email</label>
              <input
                {...register("email")}
                className="border-b-1 border-[#7C7062] mt-5 w-full focus:outline-none"
              />
            </div>
            <div className="col-span-1">
              <label className="text-[#7C7062]">Phone</label>{" "}
              <input
                {...register("phone")}
                className="border-b-1 border-[#7C7062] mt-5 w-full focus:outline-none"
              />
            </div>
            <div className="col-span-1">
              <label className="text-[#7C7062]">Address</label>{" "}
              <input
                {...register("address")}
                className="border-b-1 border-[#7C7062] mt-5 w-full focus:outline-none"
              />
            </div>
            <div className="pt-7 text-center ">
              <button
                type="submit"
                disabled={isSubmitting}
                className="border border-[#7C7062] w-full py-3 text-[#7C7062] hover:bg-[#9A8A78] hover:text-[#343230] "
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
        <div className="sm:px-10 text-center lg:text-start">
          <ul>
            <li className="text-[#7C7062]">Home</li>
            <li className="text-[#7C7062]">Services</li>
            <li className="text-[#7C7062]">Projects</li>
            <li className="text-[#7C7062]">Contact</li>
          </ul>
          <div className="py-6 sm:py-15">
            <a href="tel:555-555-5555">
              <button
                type="submit"
                className="bg-[#7C7062] px-8 md:px-6 py-2 text-[#343230] hover:bg-[#9A8A78] "
              >
                CALL NOW
              </button>
            </a>
          </div>
          <p className="block sm:hidden text-[#7C7062] pt-10 text-sm font-semibold">
            ©2025 designed and developed by{" "}
            <a href="https://github.com/KavyaSunithaVijayan" target="_blank">
              Kavya Vijayan
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
