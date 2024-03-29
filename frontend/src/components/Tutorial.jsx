export default function Tutorial({ variant }) {
  const cgiVideoItems = [
    {
      title: "加载浏览器插件",
      body: "在chrome浏览器中，点击右上角 -> 扩展程序 -> 管理扩展程序。打开开发者模式后，点击加载已解压的扩展程序，选择插件所在文件夹。",
    },
    {
      title: "输入刷签凭证",
      body: "加载插件后，输入邮箱收到的token，点击开始刷签。在这期间如果你打开了美签取消预约页面/更改预约页面并且有符合你时间的slot，程序会检测到并且自动跳转到预约页面帮你预约。",
    },
  ];

  const cgiImageItems = [
    {
      title: "填写个人信息",
      body: "提供签证预约网站的登陆密码，并且输入预约人数。请确保你输入的人数与账户中的一致，否则程序无法正常运行。",
    },
    {
      title: "发送邮件提交",
      body: "请仔细检查你填写的信息，尤其确保提供的密码可以成功登陆签证预约网站。确认无误后，请使用与签证预约网站账户相同的邮箱发送界面中显示内容的邮件。如果没有收到自动回邮，证明发送内容有误，或系统遇到了网络错误，请检查发送的内容，多尝试几次。",
    },
  ];

  const aisItems = [
    {
      title: "填写个人信息",
      body: "选择你想预约面试的城市，并且提供签证预约网站的登陆密码。如果账户中所有人都需要刷签，不需要填写schedule ID，系统会自动判断。",
    },
    {
      title: "为某位申请人刷签（可选）",
      body: "如果不是账户中所有人都需要刷签，你可以通过填写schedule ID指定为账户中哪位申请人刷签。登陆https://ais.usvisa-info.com/en-ca/niv/users/sign_in后，点击continue，网址中显示的数字即为schedule ID。多位申请人请以54306276,54306278的格式填写。",
    },
    {
      title: "多人拆组刷签（可选）",
      body: "如果账户中有多人同组，系统默认为多人一起刷签，但是成功率比较低。如果可以接受在不同时间面试，请把同组的人拆分。登陆https://ais.usvisa-info.com/en-ca/niv/users/sign_in后，点击continue，在如图所示界面中点击Reschedule Appointment后勾选一位申请人，点击下一步，即可把申请人拆分出来形成一个新的schedule ID。",
    },
    {
      title: "发送邮件提交",
      body: "请仔细检查你填写的信息，尤其确保提供的密码可以成功登陆签证预约网站。确认无误后，请使用与签证预约网站账户相同的邮箱发送界面中显示内容的邮件。如果没有收到自动回邮，证明发送内容有误，或系统遇到了网络错误，请检查发送的内容，多尝试几次。",
    },
    {
      title: "完成订单支付",
      body: "请从上一步的自动回邮中点击支付链接，用任意方式完成支付后你会再次收到一封自动回邮，表明刷签已经开始。",
    },
  ];

  return (
    <>
      <h2 className="text-center text-3xl font-bold">使用教程</h2>
      {variant === "cgi" &&
        cgiImageItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col-reverse gap-x-6 gap-y-6 lg:grid lg:grid-cols-10"
          >
            <img
              src={`/cgi-${index + 1}.png`}
              className="col-span-7 border border-foreground-400"
            />
            <div className="col-span-3 w-full space-y-3 text-wrap">
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="text-lg">{item.body}</p>
            </div>
          </div>
        ))}
      {(variant === "cgi" ? cgiVideoItems : aisItems).map((item, index) => (
        <div
          key={index}
          className="flex flex-col-reverse gap-x-6 gap-y-6 lg:grid lg:grid-cols-10"
        >
          {variant === "cgi" ? (
            <video
              src={`/cgi-${index + 1}.mp4`}
              autoPlay
              loop
              className="col-span-7 border border-foreground-400"
            />
          ) : (
            <img
              src={`/${index + 1}.png`}
              className="col-span-7 border border-foreground-400"
            />
          )}
          <div className="col-span-3 w-full space-y-3 text-wrap">
            <h3 className="text-2xl font-bold">{item.title}</h3>
            <p className="text-lg">{item.body}</p>
          </div>
        </div>
      ))}
    </>
  );
}
