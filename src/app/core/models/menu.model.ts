export interface MenuItem {
  name: string;
  icon: string;
  route?: string;
}

export const MENU_ITEMS: MenuItem[] = [
  { name: 'Dashboard', icon: 'home', route: 'dashboard' },
  { name: 'Employee', icon: 'account_circle', route: 'employees' },
  { name: 'Performance', icon: 'trending_up', route: 'performance' },
  { name: 'Leave', icon: 'event', route: 'leaves' },
  { name: 'Attendance', icon: 'access_time', route: 'attendance' },
  { name: 'Account', icon: 'account_balance', route: 'account' },
  { name: 'Exit', icon: 'exit_to_app', route: 'exit' },
];
