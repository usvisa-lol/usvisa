import { useParams } from "react-router-dom";
import { useRef, useState } from "react";
import { Button } from "@nextui-org/react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import SubmissionForm from "../components/SubmissionForm";
import { aisFaq, cgiFaq } from "../constants";
import { MdArrowBackIosNew } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { countryMap } from "../config";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import Tutorial from "../components/Tutorial";
import { CiCircleQuestion } from "react-icons/ci";
import RequestForm from "../components/RequestForm.jsx";
import { Link } from "@nextui-org/react";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@nextui-org/react";
export default function Home() {
  const [formData, setFormData] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [action, setAction] = useState(null);
  const params = useParams();
  const { country } = params;
  const { t } = useTranslation();
  const location = useLocation();
  const variant = location.pathname.split("/")[1];
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const ref = useRef(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (formData) => {
    setFormData({
      country,
      action,
      schedule_ids:
        formData.schedule_ids === "" ? [] : formData.schedule_ids.split(","),
    });
    setActiveTab((prev) => prev + 1);
  };

  const options = [
    {
      action: "create",
      label: t("home.option1"),
    },
    {
      action: "query",
      label: t("home.option2"),
    },
    {
      action: "cancel",
      label: t("home.option3"),
    },
  ];

  return (
    <div className="flex w-full flex-col gap-y-12 py-12">
      <div className="flex flex-col justify-center gap-y-6">
        <h1 className="text-center text-5xl font-extrabold md:text-6xl">
          <span
            className={`bg-gradient-to-br ${variant === "cgi" ? "from-sky-500 to-purple-600" : "from-blue-500 via-purple-500 to-gray-400"} bg-clip-text text-transparent`}
          >
            {variant}{" "}
          </span>
          {t("home.heading")}{" "}
          <span className="text-2xl underline decoration-fuchsia-700 decoration-2 underline-offset-8 md:text-3xl">
            {countryMap[country][3]}
          </span>
        </h1>
        <div className="space-y-1.5 text-center">
          <p className="text-xl font-bold">{t("home.heading2")}</p>
          <p className="font text-lg text-foreground-500">
            {variant === "cgi" ? "支持Chrome浏览器" : t("home.heading3")}
          </p>
          {variant === "cgi" && (
            <Link href="https://usvisa-lol-1324851224.cos.ap-shanghai.myqcloud.com/usvisa.lol.zip">
              点击下载插件
            </Link>
          )}
        </div>
      </div>
      <div className="relative flex flex-col gap-y-8 py-12">
        <h2 className="text-center text-3xl font-bold">{t("home.cta")}</h2>
        <Button
          className="absolute right-0 bg-background"
          disableAnimation
          isIconOnly
          onClick={() => ref.current.scrollIntoView({ behavior: "smooth" })}
        >
          <CiCircleQuestion size={36} className="text-red-500" />
        </Button>
        <div className="space-y-12">
          <div className="grid grid-cols-3 gap-x-3 md:gap-x-6">
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <button
                  key={index}
                  className={`h-[30px] border-b-4 ${activeTab === index ? "border-sky-400" : "border-gray-500"}`}
                  onClick={() => setActiveTab(index)}
                  disabled={activeTab !== index}
                />
              ))}
          </div>
          <Button
            isIconOnly
            disableAnimation
            variant="light"
            className="absolute -left-3"
            isDisabled={activeTab < 1}
            onClick={() => {
              setActiveTab((prev) => {
                if (action === "query") return prev - 2;
                return prev - 1;
              });
            }}
          >
            <MdArrowBackIosNew size={20} />
          </Button>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === 0 && (
              <div className="flex flex-col items-center gap-y-6 py-6">
                <p className="text-xl font-semibold">
                  {t("home.optionsTitle")}
                </p>
                <div
                  className={`grid grid-cols-1 gap-x-3 gap-y-3 lg:grid-cols-3`}
                >
                  {options.map((option, index) => {
                    if (index === 1) {
                      return (
                        <Button
                          key={option.action}
                          variant="ghost"
                          className="border border-foreground text-base"
                          disableAnimation
                          onClick={() => {
                            setAction(option.action);
                            setFormData({
                              action: option.action,
                              country: country,
                            });
                            setActiveTab((prev) => prev + 2);
                          }}
                        >
                          {option.label}
                        </Button>
                      );
                    }
                    return (
                      <Button
                        key={option.action}
                        variant="ghost"
                        className="border border-foreground text-base"
                        disableAnimation
                        onClick={() => {
                          setAction(option.action);
                          setActiveTab((prev) => prev + 1);
                        }}
                      >
                        {option.label}
                      </Button>
                    );
                  })}
                </div>
              </div>
            )}
            {activeTab === 1 &&
              (action === "create" ? (
                <RequestForm
                  variant={variant}
                  setters={{ setFormData, setActiveTab }}
                />
              ) : (
                <div className="flex flex-col items-center gap-y-6 py-6">
                  <p className="text-xl font-semibold">
                    {t("home.refundOptionTitle")}
                  </p>
                  <p>{t("home.refundP1")}</p>
                  <p>{t("home.refundP2")}</p>
                  <p>{t("home.refundP3")}</p>
                  {variant === "ais" ? (
                    <form
                      onSubmit={handleSubmit(handleFormSubmit)}
                      className="flex w-full flex-col gap-y-3 lg:w-3/5"
                      noValidate
                    >
                      <Controller
                        control={control}
                        name="schedule_ids"
                        defaultValue=""
                        rules={{
                          pattern: {
                            value: /^\d{8}(,\d{8})*$/,
                            message: t("form.fieldErrorMessage2a"),
                          },
                          minLength: {
                            value: 8,
                            message: t("form.fieldErrorMessage2b"),
                          },
                        }}
                        render={({ field }) => (
                          <Input
                            {...field}
                            variant="underlined"
                            className="w-full"
                            label="Schedule ID"
                            type="text"
                            placeholder={t("home.refundInput1")}
                            errorMessage={errors?.schedule_ids?.message}
                          />
                        )}
                      />
                      <Button
                        className="bg-foreground text-background"
                        type="submit"
                      >
                        {t("buttons.next")}
                      </Button>
                    </form>
                  ) : (
                    <Button
                      className="bg-foreground text-background"
                      onClick={() => {
                        setFormData({ action: action, country: country });
                        setActiveTab((prev) => prev + 1);
                      }}
                    >
                      {t("buttons.next")}
                    </Button>
                  )}
                </div>
              ))}
            {activeTab === 2 && <SubmissionForm formData={formData} />}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex flex-col gap-y-6 lg:gap-y-12" ref={ref}>
        {variant === "cgi" && (
          <>
            <h2 className="text-center text-3xl font-bold">工作原理</h2>
            <p className="text-lg">
              程序为半自动互助模式，如果运行期间用户主动打开取消预约页面/更改预约页面，程序会抓取页面上的slot发送到服务端，
              服务端再判断是否适合用户的刷签条件，如果满足条件，
              会通知运行在用户电脑上的浏览器扩展，自动打开预约页面进行预约。
            </p>
          </>
        )}
        <h2 className="text-center text-3xl font-bold">常见问题</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-6 lg:grid-cols-3">
          {(variant === "cgi" ? cgiFaq : aisFaq).map((item, index) => (
            <div
              key={index}
              className="space-y-3 text-wrap p-3 hover:bg-foreground-50"
            >
              <h3 className="text-lg font-medium">{item.question}</h3>
              <p className="text-foreground-500">{item.answer}</p>
            </div>
          ))}
        </div>
        <Tutorial variant={variant} />
      </div>
      <div
        className="fixed bottom-0 left-0 flex h-fit w-[25px] cursor-pointer flex-col items-center justify-center rounded-md bg-foreground-300 px-3 py-3 text-sm leading-none lg:text-base"
        onClick={onOpen}
      >
        <span>D</span>
        <span>O</span>
        <span>N</span>
        <span>A</span>
        <span>T</span>
        <span>E</span>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>捐赠我们</ModalHeader>
              <ModalBody className="mx-auto">
                <img src="/tipsQR.png" alt="tips" width={240} />
              </ModalBody>
              <ModalFooter>
                <Button
                  variant="ghost"
                  className="border border-foreground"
                  disableAnimation
                  onClick={onClose}
                >
                  关闭
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
