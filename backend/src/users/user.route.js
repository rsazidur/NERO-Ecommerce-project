const express = require('express');
const User = require('./user.model');
const generateToken = require('../middleware/generateToken');
const verifyToken = require('../middleware/verifyToken');
const router = express.Router();

// Register endpoint
router.post("/register", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = new User({ username, email, password });
        await user.save();
        res.status(201).send({ message: "User created successfully!" });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).send({ message: "Error registering user" });
    }
});

// Login user endpoint
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).send({ message: "Password does not match" });
        }

        const token = await generateToken(user.id);

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
        });

        res.status(200).send({
            message: "Login successful",
            token,
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                role: user.role,
                profileImage: user.profileImage,
                bio: user.bio,
                profession: user.profession
            }
        });
    } catch (error) {
        console.error("Error logging in user:", error);
        res.status(500).send({ message: "Error logging in user" });
    }
});

// All users endpoint
router.get("/users", verifyToken, async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).send({ message: "Error fetching users" });
    }
});

// logout endpoint
router.post("/logout", (req, res) => {
    res.clearCookie("token");
    res.status(200).send({ message: "Logout successful" });
});


// Delete user
router.delete("/user/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }
        res.status(200).send({ message: "User deleted successfully" });
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).send({ message: "Error deleting user" });
    }
    
});


// get all users

router.get("/users", async (req, res) => {
    try {
        const users = await User.find({}, "id email username role").sort({ createdAt: -1 });
        res.status(200).send(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).send({ message: "Error fetching users" });
    }

}); 

// update user role
router.put("/user/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { role } = req.body;
        const user = await User.findByIdAndUpdate(id, { role }, { new: true });
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }
        res.status(200).send({ message: "User role updated successfully" }, user);

    } catch (error) {
        console.error("Error updating user role:", error);
        res.status(500).send({ message: "Error updating user role" });
    }
});

// update user profile
router.put("/edit-profile", async (req, res) => {
    try {
        const { userId, username, profileImage, bio, profession } = req.body;
        if (!userId) {
            return res.status(400).send({ message: "User ID not found" });
        }
        const user = await User.findById(userId);
        
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }
        // update user profile
        if (username !== undefined) user.username = username;
        if (profileImage !== undefined) user.profileImage = profileImage;
        if (bio !== undefined) user.bio = bio;
        if (profession !== undefined) user.profession = profession;
        await user.save();
        res.status(200).send({ message: "User profile updated successfully",
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                role: user.role,
                profileImage: user.profileImage,
                bio: user.bio,
                profession: user.profession
            },
         });

    } catch (error) {
        console.error("Error updating user profile:", error);
        res.status(500).send({ message: "Error updating user profile", });
    }
});


module.exports = router;