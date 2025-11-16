"use client"
import { Menu } from 'antd'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { sidebarItems } from './menuItems'


const Sidebar = ({ collapsed }: { collapsed: boolean }) => {
    const pathname = usePathname();

    return (
        <Menu
            mode="inline"
            selectedKeys={[pathname]}
            items={sidebarItems.map((item, _) => ({
                key: item.key,
                icon: item.icon,
                label: <Link href={item.key}>{item.label}</Link>,
            }))}
            style={{
                borderRight: 0,
                marginTop: 16,
            }}
        />
    );
};

export default Sidebar;