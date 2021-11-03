import Drawer from "@mui/material/Drawer";

export default function CommonDrawer({
  mobileOpen,
  handleDrawerToggle,
  drawer,
  props,
}) {
  const drawerWidth = 240;

  const { window } = props;
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </div>
  );
}
