import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "@/contexts/authContext";

export function DialogAuth({ isOpen, setIsOpen }) {
  const { user, logout, hasRole } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="fixed left-332 top-27 w-40 p-2 border-none shadow-lg">
        <DialogFooter className="grid grid-cols-1 gap-2">
          {user ? (
            // Đã login - hiển thị menu theo role
            <>
              {/* Hiển thị thông tin user */}
              <div className="px-2 py-1 text-sm border-b">
                <p className="font-semibold">{user.username || user.email}</p>
                <p className="text-xs text-gray-500 capitalize">{user.role}</p>
              </div>

              {/* Menu cho Admin */}
              {hasRole("admin") && (
                <>
                  <Link to="/admin/dashboard">
                    <Button
                      type="button"
                      className="w-full bg-white text-black hover:bg-[#665de6] hover:text-white justify-start"
                      onClick={closeDialog}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4 mr-2"
                      >
                        <rect x="3" y="3" width="7" height="7"></rect>
                        <rect x="14" y="3" width="7" height="7"></rect>
                        <rect x="14" y="14" width="7" height="7"></rect>
                        <rect x="3" y="14" width="7" height="7"></rect>
                      </svg>
                      Dashboard
                    </Button>
                  </Link>
                  <Link to="/admin/users">
                    <Button
                      type="button"
                      className="w-full bg-white text-black hover:bg-[#665de6] hover:text-white justify-start"
                      onClick={closeDialog}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4 mr-2"
                      >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                      Manage Users
                    </Button>
                  </Link>
                </>
              )}

              {/* Menu cho tất cả users đã login */}
              <Link to="/my-blogs">
                <Button
                  type="button"
                  className="w-full bg-white text-black hover:bg-[#665de6] hover:text-white justify-start"
                  onClick={closeDialog}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 mr-2"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                  </svg>
                  My Blogs
                </Button>
              </Link>

              <Link to="/profile">
                <Button
                  type="button"
                  className="w-full bg-white text-black hover:bg-[#665de6] hover:text-white justify-start"
                  onClick={closeDialog}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 mr-2"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  Profile
                </Button>
              </Link>

              {/* Divider */}
              <div className="border-t my-1"></div>

              {/* Logout button */}
              <Button
                type="button"
                className="w-full bg-white text-black hover:bg-red-500 hover:text-white justify-start"
                onClick={handleLogout}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 mr-2"
                >
                  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
                  <path d="M9 12h12l-3 -3"></path>
                  <path d="M18 15l3 -3"></path>
                </svg>
                Logout
              </Button>
            </>
          ) : (
            // Chưa login - hiển thị Login & Sign up
            <>
              <Link to="/login">
                <Button
                  type="button"
                  className="w-full bg-white text-black hover:bg-[#665de6] hover:text-white justify-start"
                  onClick={closeDialog}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 mr-2"
                  >
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                    <polyline points="10 17 15 12 10 7"></polyline>
                    <line x1="15" y1="12" x2="3" y2="12"></line>
                  </svg>
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button
                  type="button"
                  className="w-full bg-white text-black hover:bg-[#665de6] hover:text-white justify-start"
                  onClick={closeDialog}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 mr-2"
                  >
                    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                    <path d="M16 19h6"></path>
                    <path d="M19 16v6"></path>
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
                  </svg>
                  Sign up
                </Button>
              </Link>
            </>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
