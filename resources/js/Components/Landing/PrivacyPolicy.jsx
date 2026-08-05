import { Reveal, RevealGroup, RevealItem } from '@/Components/Landing/motion/Reveal';

const sections = [
    {
        title: 'Mục đích và phạm vi thu thập',
        items: [
            'Việc thu thập dữ liệu chủ yếu trên website autolive.vip bao gồm: họ tên, email, điện thoại. Đây là các thông tin cần thiết cần thành viên cung cấp bắt buộc để autolive.vip liên hệ xác nhận khi khách hàng sử dụng dịch vụ trên website nhằm đảm bảo quyền lợi cho các khách hàng.',
            'Các khách hàng sẽ tự chịu trách nhiệm về bảo mật và lưu giữ mọi hoạt động sử dụng dịch vụ dưới tên và email của mình. Ngoài ra khách hàng có trách nhiệm thông báo kịp thời cho autolive.vip về những hành vi sử dụng trái phép, lạm dụng, vi phạm bảo mật, lưu giữ tên và mật khẩu của bên thứ ba để có biện pháp giải quyết phù hợp.',
        ],
    },
    {
        title: 'Phạm vi sử dụng thông tin',
        items: [
            {
                text: 'Các thông tin cá nhân được khách hàng cung cấp có thể dùng vào các mục đích sau:',
                children: [
                    'Cung cấp các dịch vụ đến khách hàng',
                    'Gửi các thông báo về các hoạt động trao đổi thông tin giữa khách hàng và autolive.vip',
                    'Ngăn ngừa các hoạt động phá lộ thông tin cá nhân hoặc các hoạt động giả mạo khách hàng',
                ],
            },
            'Liên lạc và giải quyết với khách hàng trong những trường hợp đặc biệt. Không sử dụng thông tin cá nhân của khách hàng ngoài mục đích xác nhận và liên hệ có liên quan đến giao dịch tại autolive.vip.',
            'Trong trường hợp có yêu cầu của pháp luật: autolive.vip có trách nhiệm hợp tác cung cấp thông tin cá nhân của khách hàng khi có yêu cầu từ cơ quan tư pháp bao gồm: Viện kiểm sát, tòa án, cơ quan công an điều tra liên quan đến hành vi vi phạm pháp luật nào đó của khách hàng. Ngoài ra, không ai có quyền xâm phạm vào thông tin cá nhân của khách hàng.',
        ],
    },
    {
        title: 'Thời gian lưu giữ thông tin',
        items: [
            'Dữ liệu cá nhân của khách hàng sẽ được lưu trữ cho đến khi có yêu cầu hủy bỏ hoặc tự thành viên đăng nhập và thực hiện hủy bỏ. Còn lại trong mọi trường hợp thông tin cá nhân của khách hàng sẽ được bảo mật.',
        ],
    },
    {
        title: 'Những người hoặc tổ chức có thể được tiếp cận với thông tin đó',
        items: [
            {
                text: 'Khách hàng đồng ý rằng: trong trường hợp cần thiết, các cơ quan/tổ chức/cá nhân sau có quyền được tiếp cận và thu thập các thông tin của mình, bao gồm:',
                children: [
                    'Ban Quản Trị autolive.vip.',
                    'Cơ quan nhà nước có thẩm quyền (trong trường hợp có yêu cầu của pháp luật).',
                    'Bên khiếu nại chứng minh được hành vi vi phạm của khách hàng (nếu có).',
                ],
            },
        ],
    },
    {
        title: 'Địa chỉ của đơn vị thu thập và quản lý thông tin cá nhân',
        items: [
            'CÔNG TY CỔ PHẦN ÂM NHẠC VÀ CÔNG NGHỆ MOONSHOTS',
            'Địa chỉ: Tầng 9, Tòa Nhà Lucky, Số 81 Trần Thái Tông, Phường Dịch Vọng, Quận Cầu Giấy, Hà Nội',
            'Điện thoại: 0969567938',
            'Email: sang@moonshots.vn',
        ],
    },
    {
        title: 'Phương tiện và công cụ để người dùng tiếp cận và chỉnh sửa dữ liệu cá nhân của mình',
        items: [
            'Khách hàng có quyền tự kiểm tra, cập nhật, điều chỉnh hoặc hủy bỏ thông tin cá nhân của mình hoặc yêu cầu autolive.vip thực hiện việc này.',
            'Khách hàng có quyền gửi khiếu nại về việc lộ thông tin cá nhân cho bên thứ 3 đến ban quản trị của autolive.vip. Khi tiếp nhận những phản hồi này, autolive.vip sẽ xác nhận lại thông tin, phải có trách nhiệm trả lời lý do và hướng dẫn khách hàng khôi phục và bảo mật lại thông tin.',
            'Email: sang@moonshots.vn',
        ],
    },
    {
        title: 'Cam kết bảo mật thông tin cá nhân khách hàng',
        items: [
            'Thông tin cá nhân của khách hàng trên autolive.vip được cam kết bảo mật tuyệt đối theo chính sách bảo vệ thông tin cá nhân của khách hàng. Việc thu nhập và sử dụng thông tin của mỗi khách hàng chỉ được thực hiện khi có sự đồng ý của khách hàng đó trừ những trường hợp pháp luật quy định khác.',
            'Không sử dụng, không chuyển giao, cung cấp hay tiết lộ cho bên thứ 3 nào về thông tin cá nhân của khách hàng khi không có sự cho phép đồng ý từ thành viên.',
            'Trong trường hợp máy chủ lưu lưu trữ thông tin bị hacker tấn công dẫn đến mất mát dữ liệu cá nhân của khách hàng, autolive.vip sẽ có trách nhiệm thông báo vụ việc cho cơ quan chức năng điều tra xử lý kịp thời và thông báo cho thành viên được biết.',
            'Bảo mật tuyệt đối mọi thông tin giao dịch trực tuyến của khách hàng bao gồm thông tin hóa đơn kế toán chứng từ số hóa tại khu vực dữ liệu trung tâm an toàn cấp 1 của autolive.vip.',
            'Ban quản lý autolive.vip yêu cầu các cá nhân khi đăng ký/ mua hàng phải cung cấp đầy đủ thông tin cá nhân có liên quan như: Họ và tên, email, số điện thoại và chịu trách nhiệm về tính pháp lý của những thông tin trên. Ban quản lý autolive.vip không chịu trách nhiệm cũng như không giải quyết mọi khiếu nại có liên quan đến quyền lợi của khách hàng đó nếu xét thấy tất cả thông tin cá nhân của khách hàng đó cung cấp khi đăng ký ban đầu là không chính xác.',
        ],
    },
    {
        title: 'Cơ chế tiếp nhận và giải quyết khiếu nại liên quan đến việc thông tin cá nhân khách hàng',
        items: [
            'Thông tin cá nhân của khách hàng được cam kết bảo mật tuyệt đối theo chính sách bảo vệ thông tin cá nhân. Việc thu thập và sử dụng thông tin của mỗi khách hàng chỉ được thực hiện khi có sự đồng ý của khách hàng đó trừ những trường hợp pháp luật có quy định khác.',
            'Không sử dụng, không chuyển giao, cung cấp hay tiết lộ cho bên thứ 3 nào về thông tin cá nhân của thành viên khi không có sự cho phép đồng ý từ khách hàng.',
            'Trong trường hợp máy chủ lưu trữ thông tin bị hacker tấn công dẫn đến mất mát dữ liệu cá nhân của khách hàng, chúng tôi sẽ có trách nhiệm thông báo vụ việc cho cơ quan chức năng điều tra xử lý kịp thời và thông báo cho khách hàng được biết.',
            'Ban quản lý yêu cầu các cá nhân khi đăng ký/mua hàng phải cung cấp đầy đủ thông tin cá nhân có liên quan như: Họ và tên, email, điện thoại, và chịu trách nhiệm về tính pháp lý của những thông tin trên. Ban quản lý autolive.vip không chịu trách nhiệm cũng như không giải quyết mọi khiếu nại có liên quan đến quyền lợi của khách hàng đó nếu xét thấy tất cả thông tin cá nhân của thành viên đó cung cấp khi đăng ký ban đầu là không chính xác.',
            {
                text: 'Khách hàng có quyền gửi khiếu nại về việc lộ thông tin cá nhân cho bên thứ 3 đến ban quản trị của autolive.vip đến địa chỉ công ty:',
                children: [
                    'CÔNG TY CỔ PHẦN ÂM NHẠC VÀ CÔNG NGHỆ MOONSHOTS',
                    'Địa chỉ: Tầng 9, Tòa Nhà Lucky, Số 81 Trần Thái Tông, Phường Dịch Vọng, Quận Cầu Giấy, Hà Nội',
                    'Điện thoại: 0969567938',
                    'Email: sang@moonshots.vn',
                ],
            },
            'Công ty có trách nhiệm thực hiện các biện pháp kỹ thuật, nghiệp vụ để xác minh các nội dung được phản ánh.',
        ],
    },
];

function PolicyList({ items, level = 0 }) {
    return (
        <ul className={level === 0 ? 'mt-4 space-y-3' : 'mt-3 space-y-2 pl-6'}>
            {items.map((item, index) => {
                const isNested = typeof item === 'object';
                const text = isNested ? item.text : item;

                return (
                    <RevealItem
                        as="li"
                        direction="left"
                        duration={0.4}
                        key={index}
                        className="relative pl-5 text-[15px] leading-relaxed text-[var(--muted-foreground)]"
                    >
                        <span
                            className={`absolute left-0 top-[0.7em] rounded-full ${
                                level === 0 ? 'size-1.5 bg-[var(--hero-glow)]' : 'size-1 bg-white/30'
                            }`}
                        />
                        {text}
                        {isNested && item.children && <PolicyList items={item.children} level={level + 1} />}
                    </RevealItem>
                );
            })}
        </ul>
    );
}

export default function PrivacyPolicy() {
    return (
        <section className="container-sm pb-24">
            <Reveal as="div" className="mx-auto max-w-2xl text-center">
                <p className="text-base font-medium text-[var(--hero-glow)]">Pháp lý</p>
                <h1 className="mt-3 text-[40px] font-medium leading-[1.15] tracking-tight text-white sm:text-[48px]">
                    Chính sách bảo mật
                </h1>
                <p className="mt-4 text-base text-[var(--muted-foreground)]">
                    Cam kết của AutoLive về việc thu thập, sử dụng và bảo vệ thông tin cá nhân khách hàng.
                </p>
            </Reveal>

            <RevealGroup as="div" stagger={0.08} className="glass mt-12 rounded-3xl p-6 sm:p-10">
                {sections.map((section, index) => (
                    <RevealItem
                        as="div"
                        key={section.title}
                        direction="left"
                        duration={0.45}
                        className={index > 0 ? 'mt-10' : ''}
                    >
                        <div className="flex items-start gap-4">
                            <span className="bg-gradient-to-b from-[#f4f0ff] to-[var(--hero-glow)] bg-clip-text text-2xl font-medium text-transparent">
                                {String(index + 1).padStart(2, '0')}
                            </span>
                            <h2 className="mt-0.5 text-lg font-semibold text-white sm:text-xl">
                                {section.title}
                            </h2>
                        </div>
                        <PolicyList items={section.items} />
                    </RevealItem>
                ))}
            </RevealGroup>
        </section>
    );
}
