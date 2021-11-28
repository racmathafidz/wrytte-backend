const User = require('../models/User');
const Article = require('../models/Article');
const dateFormatter = require('../utils/dateFormatter');

const dashboard_get = async (req, res) => {
  // User and article's count
  const usersDataLength = await User.count();
  const articlesDataLength = await Article.count();

  // Render
  res.render('admin/dashboard/view_dashboard', {
    usersDataLength,
    articlesDataLength,
    title: 'Dashboard',
    userName: res.locals.user.userName,
  });
};

const users_get = async (req, res) => {
  try {
    // Find user
    const usersData = await User.find();

    // Flash alert
    const alertMessage = req.flash('alertMessage');
    const alertStatus = req.flash('alertStatus');
    const alert = { message: alertMessage, status: alertStatus };

    // Render
    res.render('admin/users/view_users', {
      usersData,
      alert,
      title: 'Users',
      userName: res.locals.user.userName,
    });
  } catch (error) {
    res.redirect('admin/users/view_users');
  }
};

const articles_get = async (req, res) => {
  try {
    // Find articles
    const articlesData = await Article.find()
      .sort({ publishDate: -1 })
      .populate('authorData');

    // Flash alert
    const alertMessage = req.flash('alertMessage');
    const alertStatus = req.flash('alertStatus');
    const alert = { message: alertMessage, status: alertStatus };

    // Render
    res.render('admin/articles/view_articles', {
      articlesData,
      dateFormatter,
      alert,
      title: 'Articles',
      userName: res.locals.user.userName,
    });
  } catch (error) {
    res.redirect('admin/articles/view_articles');
  }
};

const user_delete = async (req, res) => {
  try {
    const { id } = req.params;

    // Deleting user's account and user's all article
    await User.findByIdAndDelete(id);
    await Article.deleteMany({ authorId: id });

    // Flash alert
    req.flash('alertMessage', 'Success Deleting User');
    req.flash('alertStatus', 'success');

    res.redirect('/admin/users');
  } catch (error) {
    req.flash('alertMessage', 'Failed Deleting User');
    req.flash('alertStatus', 'danger');
    res.redirect('/admin/users');
  }
};

const article_delete = async (req, res) => {
  try {
    const { id } = req.params;

    // Deleting article
    await Article.findByIdAndDelete(id);

    // Flash alert
    req.flash('alertMessage', 'Success Deleting Article');
    req.flash('alertStatus', 'success');

    res.redirect('/admin/articles');
  } catch (error) {
    req.flash('alertMessage', 'Failed Deleting User');
    req.flash('alertStatus', 'danger');

    res.redirect('/admin/articles');
  }
};

module.exports = {
  dashboard_get,
  users_get,
  articles_get,
  user_delete,
  article_delete,
};
