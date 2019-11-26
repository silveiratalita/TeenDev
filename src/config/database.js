module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'teendev',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};

