import { contact_data, social_data } from "../../public/data/footer";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Footer = () => {
  return (
    <div className="bg-primary min-h-screen">
      <div className="bg-background3 min-h-[35vh] flex flex-col justify-end px-5 py-7 shadow-sm">
        <h2 className="text-4xl font-semibold text-white leading-tight">
          Ready to bring your idea to life?
        </h2>
        <p className="text-contentTertiary text-sm mt-3 mb-7">
          Contact me now and let&apos;s make it happen!
        </p>
        <div className="flex items-center gap-3">
          <Input
            type="email"
            placeholder="Enter your email address here"
            className="border border-[#eee] bg-background3 w-full rounded-full pl-4"
          />
          <Button
            variant="outline"
            size="icon"
            className="bg-white rounded-3xl min-w-20"
          >
            <img src="/icons/send.png" alt="send" />
          </Button>
        </div>
      </div>
      <div className="flex flex-col min-h-[65vh] justify-between px-5 py-7">
        <div>
          <h2 className="text-3xl font-semibold text-white mb-5">
            Contact <br /> Details
          </h2>
          <div className="space-y-2">
            {contact_data.map((contact) => (
              <div key={contact.id} className="flex items-center gap-2">
                <img src={contact.img} alt={contact.title} />
                <span className="text-contentTertiary">{contact.title}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-white mb-5">
            Social Links
          </h2>
          <div className="space-y-2">
            {social_data.map((social) => (
              <div key={social.id} className="flex items-center gap-2">
                <img src={social.img} alt={social.title} />
                <span className="text-contentTertiary">{social.title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center text-contentTertiary text-sm font-light">
          <p>&copy; 2024</p>
          <p>
            Made by <span className="font-semibold">vkd.dev</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
