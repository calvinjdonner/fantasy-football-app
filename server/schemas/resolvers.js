const { signToken } = require("../utils/auth");

const resolvers = {
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
  },

  Query: {
    me: async (parent, args) => {
      const userData = await User.findOne({}).select("-__v -password");

      return userData;
    },
  },
};

module.exports = resolvers;
