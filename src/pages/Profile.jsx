import { Box, useTheme } from "@mui/material";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useForm } from "react-hook-form";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useState } from "react";

const roles = [
  { value: "Admin", label: "Admin" },
  { value: "Manager", label: "Manager" },
  { value: "User", label: "User" },
];

export default function PageProfile() {
  const theme = useTheme();

  //snackPar
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  //---------------------------

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    handleClick();
  };

  return (
    <div
      className="teamContent"
      style={{ height: 600, width: "98%", margin: "0 auto" }}
    >
      <Box className="head" style={{ marginBottom: "30px" }}>
        <h1 style={{ color: theme.palette.primary.dark, fontWeight: "bold" }}>
          CREATE USER
        </h1>
        <p
          style={{
            fontWeight: "bold",
            fontSize: "18px",
            color: theme.palette.mode === "dark" ? "#fff" : "#000",
          }}
        >
          Create a New User Profile
        </p>
      </Box>

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
        noValidate
        autoComplete="off"
      >
        {/* First + Last Name */}
        <div style={{ display: "flex", gap: "20px" }}>
          {/* First Name */}
          <TextField
            style={{ flex: 1 }}
            label="First Name"
            variant="filled"
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
            {...register("firstName", {
              required: "First name is required",
              minLength: {
                value: 2,
                message: "At least 2 characters",
              },
            })}
          />

          {/* Last Name */}
          <TextField
            style={{ flex: 1 }}
            label="Last Name"
            variant="filled"
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
            {...register("lastName", {
              required: "Last name is required",
            })}
          />
        </div>

        {/* Email */}
        <TextField
          label="Email"
          variant="filled"
          error={!!errors.email}
          helperText={errors.email?.message}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Invalid email format",
            },
          })}
        />

        {/* Phone Number */}
        <TextField
          label="Contact Number"
          variant="filled"
          error={!!errors.phone}
          helperText={errors.phone?.message}
          {...register("phone", {
            required: "Phone number is required",
            pattern: {
              value: /^[0-9]{10,15}$/,
              message: "Phone must be 10–15 digits",
            },
          })}
        />

        {/* Address 1 */}
        <TextField
          label="Address 1"
          variant="filled"
          error={!!errors.address1}
          helperText={errors.address1?.message}
          {...register("address1", {
            required: "Address is required",
          })}
        />

        {/* Address 2 */}
        <TextField
          label="Address 2"
          variant="filled"
          error={!!errors.address2}
          helperText={errors.address2?.message}
          {...register("address2", {
            required: "Address 2 is required",
          })}
        />

        {/* Role Select */}
        <TextField
          select
          label="Role"
          variant="filled"
          defaultValue="User"
          error={!!errors.role}
          helperText={errors.role?.message}
          {...register("role", {
            required: "Role is required",
          })}
        >
          {roles.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        {/* Submit Button */}
        <div style={{ display: "flex", justifyContent: "end" }}>
          <button
            type="submit"
            style={{
              padding: "10px 40px",
              fontSize: "18px",
              cursor: "pointer",
              background:
                theme.palette.mode === "dark"
                  ? "#ffffff04"
                  : theme.palette.primary.dark,
              color:
                theme.palette.mode === "dark"
                  ? theme.palette.primary.dark
                  : "white",
              border: "0",
              borderRadius: "10px",
              fontWeight: "bold",
            }}
          >
            CREATE NEW USER
          </button>
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="info"
              variant="filled"
              sx={{ width: "100%" }}
            >
              Account Created Successfully
            </Alert>
          </Snackbar>
        </div>
      </Box>
    </div>
  );
}
