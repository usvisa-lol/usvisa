import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: false,
  fallbackLng: "cn",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    cn: {
      translation: {
        home: {
          heading: "系统预约",
          heading2: "自动抓取位置",
          heading3: "预约成功实时邮件通知",
          cta: "开始使用",
          optionsTitle: "请从以下选项中选择",
          option1: "创建/更新刷签请求",
          option2: "查询刷签状态",
          option3: "取消刷签&退款",
          refundOptionTitle: "请确认以下内容",
          refundP1: "提交后系统将会在24小时内自动完成退款",
          refundP2: "退款后刷签请求将即刻失效，如需再次使用请重新付款",
          refundP3: "建议同步修改账户密码以保证信息安全",
          refundInput1: "不填默认为账户中全部申请人退款",
        },
        buttons: {
          next: "下一步",
          back: "上一步",
          close: "关闭",
        },
        submissionForm: {
          heading1: "请使用签证预约邮箱发送以下邮件",
          heading2: "收不到自动回复？检查垃圾信箱或",
          link1: "更换签证账户邮箱",
        },
        emailChangeModal: {
          title: "更换签证账户邮箱",
          text1:
            "1. 登陆https://ais.usvisa-info.com/en-ca/niv/users/sign_in后，点击右上角Actions -> Account Settings -> Update Email。",
          text2:
            "2. 输入要更换的邮箱，点击Update。新邮箱最好是gmail，防止邮件被识别为广告或垃圾邮件。",
        },
        navbar: {
          link1: "使用教程",
          link2: "填写DS-160",
        },
        payment: {
          option1: "微信支付",
          option2: "支付宝",
          option3: "银联支付",
          text1: "请从以下支付方式中选择：",
          text2a: "点击按钮后你会跳转到相应页面完成支付，",
          text2b: "完成支付后请保存好支付订单id。",
          buttonText: "前往支付页面",
        },
        form: {
          fieldLabel1: "预约国家",
          fieldPlaceholder1: "加拿大",
          fieldPlaceholder2: "大多数用户都不用填",
          fieldErrorMessage2a: "无效schdule id",
          fieldErrorMessage2b: "单个schedule id是8位数字",
          fieldLabel3: "预约城市",
          fieldPlaceholder3: "可多选",
          fieldErrorMessage3: "至少选择一个城市",
          fieldLabel4: "USVISA-INFO登陆密码",
          fieldErrorMessage4: "请输入USVISA-INFO登陆密码",
          datepickerHeader: "期望预约时间段",
          datepickerSubHeader: "可多选",
          datepickerButtonText: "添加时间范围",
          datepickerStart: "起始日期",
          datepickerEnd: "截止日期",
          submitButtonText: "阅读后提交新请求",
          cancelButtonText: "取消",
          confirmButtonText: "确认",
        },
        submission: {
          fieldLabel1: "收件人",
          fieldLabel2: "标题",
          fieldLabel3: "内容",
          clipboardMessage: "已复制",
        },
        cancellationButtonText: "提交取消请求",
        cancellationFieldPlaceholder: "不填即为取消账户下所有请求",
        queryButtonText: "提交查询请求",
        discordButtonText1: "加入Discord",
        discordButtonText2: "请求新功能/国家支持, 参与讨论或提供反馈",
        githubButtonText1: "加入Github",
        githubButtonText2: "请求新功能/国家支持, 参与讨论或提供反馈",
        communityButtonText: "用户交流",
        toggleLanguage: "EN",
        open: "显示",
        close: "关闭",
        donation: "如果你愿意支持这个项目可以用以下方式捐赠",
        donationText: "仅限捐赠使用",
      },
    },
    en: {
      translation: {
        buttons: {
          next: "Next",
          back: "Back",
          close: "Close",
        },
        home: {
          heading: "Appointment Finder",
          heading2: "Automatically Book a Slot",
          heading3: "and get real-time email after successful booking",
          cta: "Start Here",
          optionsTitle: "Please select one of the following",
          option1: "Create/Update request",
          option2: "Query existing request",
          option3: "Cancel request & Refund",
          refundOptionTitle: "Please note the following",
          refundP1: "You'll receive your refund automatically within 24 hours",
          refundP2:
            "After the refund, the appointment search will be canceled and you'll need to book again.",
          refundP3:
            "For security, we recommend changing your password on the booking website",
          refundInput1:
            "If left blank, all applicants in the account will be refunded by default.",
        },
        submissionForm: {
          heading1:
            "Plese email us the following details using the email used for your visa appointment",
          heading2:
            "Didn't recieve an automated reply? Please check your spam folder",
          link1: "or change your email address",
        },
        emailChangeModal: {
          title: "Change Visa Account Email",
          text1:
            "1. Login to https://ais.usvisa-info.com/en-ca/niv/users/sign_in then on the top right corner click Actions -> Account Settings -> Update Email.",
          text2:
            "2. Enter the new email and click Update. To avoid getting categorized as Ad/spam email, we recommend using Gmail.",
        },
        navbar: {
          link1: "User Tutorial",
          link2: "DS-160",
        },
        payment: {
          option1: "WechatPay",
          option2: "AliPay",
          option3: "UnionPay",
          text1: "Please select from the following options for payment: ",
          text2a:
            "You will be redirected to the corresponding page to complete the payment.",
          text2b: "Please save your payment order ID.",
          buttonText: "Go to payment page",
        },
        form: {
          fieldLabel1: "Country",
          fieldPlaceholder1: "Canada",
          fieldPlaceholder2: "Not necessary for most users",
          fieldErrorMessage2a: "Invalid schedule id",
          fieldErrorMessage2b: "A single schedule id should be 8 digits",
          fieldLabel3: "Consulate",
          fieldPlaceholder3: "Multiple selection",
          fieldErrorMessage3: "At lease one selection is required",
          fieldLabel4: "USVISA-INFO login password",
          fieldErrorMessage4: "Login password for USVISA-INFO is required",
          datepickerHeader: "Desirable Time Range",
          datepickerSubHeader: "multiple",
          datepickerButtonText: "New time range",
          datepickerStart: "Start date",
          datepickerEnd: "End date",
          submitButtonText: "Submit Request",
          cancelButtonText: "Cancel",
          confirmButtonText: "Confirm",
        },
        faq: {
          heading: "FAQ",
          faq1: 'How should I answer the TCN question "Are you traveling from another country to apply for a U.S. visa in Canada?"',
          answer1:
            "No if you are a local resident, student, worker, or permanent resident. Yes if you are in Canada on a visitor's Visa.",
          faq2: "Am I eligible to use this program if I answered yes to the above question?",
          answer2:
            "Yes, the program is applicable to both yes and no scenarios; but the success rate of tcn=yes is quite low, please make sure you answer correctly.",
          faq3: "What else do I need to do after submitting the request? Is there anything I cannot do?",
          answer3:
            "No, the program will automatically reschedule and send an email notificaiton to you. In the mean time, you can do whatever you want, it won't affect the program.",
          faq4: "Should I cancel my existing appointment to use the program? Will my appointment get cancelled by the program?",
          answer4:
            "No, you don't have to cancel your existing appointment. The program won't cancel your appointment, instead, it will only reschedule the appointment to your desirable date range. Make sure your USVISA-INFO credentials remain secured.",
          faq5: "What if I need to correct the information or date range?",
          answer5: "Submit a new request.",
          faq6: "Can I use the program again and again and again?",
          answer6: "Yes, simply submit a new request, but you'll have to pay.",
        },
        submission: {
          fieldLabel1: "Recipient",
          fieldLabel2: "Subject",
          fieldLabel3: "Body",
          clipboardMessage: "Copied successfully!",
        },
        cancellationButtonText: "Submit Cancellation Request",
        cancellationFieldPlaceholder: "Leave it blank to cancel all requests",
        queryButtonText: "Submit Query Request",
        githubButtonText1: "Join Github",
        githubButtonText2:
          "Request new feature / country support, ask questions or provide feedback",
        discordButtonText1: "Join Discord",
        discordButtonText2:
          "Ask questions, share feedback, get updates, learn about upcoming features and more",
        communityButtonText: "Community",
        toggleLanguage: "CN",
        open: "Display ",
        close: "Close ",
        donation:
          "If you wish to support this program, please consider donating us.",
        donationText: "This should be used for donation only",
      },
    },
  },
});

const selectedLanguage = localStorage.getItem("lang");

if (selectedLanguage) {
  i18n.changeLanguage(selectedLanguage);
}

export default i18n;
