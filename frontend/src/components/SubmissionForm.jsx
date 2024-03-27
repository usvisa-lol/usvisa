/* eslint-disable react/prop-types */
import { Input, Link, Textarea } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { abbr, countryMap } from "../config.js";
import { Button } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import updateEmail_1 from "/updateEmail-1.png";
import updateEmail_2 from "/updateEmail-2.png";
import { useLocation } from "react-router-dom";

export default function SubmissionForm({ formData }) {
  const recipient = `${abbr[countryMap[formData.country][0]]}.${countryMap[formData.country][1]}.${Math.floor(Math.random() * 10) + 1}@usvisa.lol`;
  const subject = "打击签证黄牛 fight against visa scalpers";
  const body = `<<<${JSON.stringify(formData)}>>>`;
  const { t } = useTranslation();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const location = useLocation();
  const variant = location.pathname.split("/")[1];

  const copyToClipboard = async (value) => {
    await navigator.clipboard.writeText(value);
    alert(t("submission.clipboardMessage"));
  };

  const handleClick = () => {
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="mx-auto flex w-full flex-col gap-y-6 py-6 md:w-3/5">
      <div className="flex flex-col items-center gap-y-3">
        <p className="text-center text-xl font-semibold">
          {t("submissionForm.heading1")} <br />
          <span className="text-base font-normal text-red-500">
            {variant === "cgi" ? (
              "收不到自动回复请检查垃圾信箱或重新发送"
            ) : (
              <>
                {t("submissionForm.heading2")}
                <Link
                  onClick={onOpen}
                  showAnchorIcon
                  className="cursor-pointer"
                >
                  {t("submissionForm.link1")}
                </Link>
              </>
            )}
          </span>
        </p>
      </div>
      <Input
        isReadOnly
        label={t("submission.fieldLabel1")}
        variant="bordered"
        defaultValue={recipient}
        type="email"
        onClick={() => copyToClipboard(recipient)}
      ></Input>
      <Input
        isReadOnly
        label={t("submission.fieldLabel2")}
        variant="bordered"
        defaultValue={subject}
        type="text"
        onClick={() => copyToClipboard(subject)}
      ></Input>
      <Textarea
        isReadOnly
        label={t("submission.fieldLabel3")}
        variant="bordered"
        defaultValue={body}
        onClick={() => copyToClipboard(body)}
      />
      <Button
        className="bg-foreground text-background"
        onClick={() => handleClick()}
      >
        {t("text.text19")}
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        className="max-w-[550px]"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>{t("emailChangeModal.title")}</ModalHeader>
              <ModalBody>
                <div className="mx-auto flex w-full flex-col gap-y-2">
                  <p className="text-base">{t("emailChangeModal.text1")}</p>
                  <img
                    src={updateEmail_1}
                    alt="update email"
                    className="self-center border border-foreground-400"
                  />
                  <p className="text-base">{t("emailChangeModal.text2")}</p>
                  <img
                    src={updateEmail_2}
                    alt="update email"
                    className="self-center border border-foreground-400"
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  variant="ghost"
                  className="border border-foreground"
                  disableAnimation
                  onClick={onClose}
                >
                  {t("buttons.close")}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
