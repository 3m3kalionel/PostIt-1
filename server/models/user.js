import bcrypt from 'bcrypt';

export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: {
        args: true,
        msg: 'id already exists!'
      },
      validate: {
        isUUID: {
          args: 4,
          msg: 'id must be uuid'
        }
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'username is not available!'
      },
      validate: {
        notEmpty: {
          msg: 'username cannot be an empty string'
        },
        isAlphanumeric: {
          msg: 'username can only contain letters and numbers'
        },
        len: {
          args: [3, 25],
          msg: 'username cannot be longer than 25 characters'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'email already exists!'
      },
      validate: {
        isEmail: {
          msg: 'email is invalid',
        },
        len: {
          args: [5, 254],
          msg: 'email has invalid length'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [6, 255],
          msg: 'password must be at least six characters long'
        }
      }
    },
    phoneNo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'mobile number cannot be an empty string'
        },
        isNumeric: {
          msg: 'mobile number is invalid'
        }
      }
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'user'
    },
    photoURL: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    hooks: {
      beforeCreate(user) {
        return bcrypt.hash(user.password, 10)
        .then((hash) => {
          user.password = hash;
          return user.password;
        });
      },
      beforeUpdate(user) {
        if (user.changed('password')) {
          return bcrypt.hash(user.password, 10)
          .then((hash) => {
            user.password = hash;
            return user.password;
          });
        }
      }
    }
  });
  User.associate = function associate(models) {
    User.belongsToMany(models.Message, {
      through: models.UserMessages
    });
    User.belongsToMany(models.Group, {
      through: 'GroupUsers'
    });
  };
  User.prototype.verifyPassword = function verifyPassword(password) {
    return bcrypt.compare(password, this.password)
    .then((res) => {
      return res;
    });
  };
  return User;
};
