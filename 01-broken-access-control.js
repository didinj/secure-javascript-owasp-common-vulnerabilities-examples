app.get('/admin/users', (req, res) => {
  res.json(users);
});

app.get('/admin/users', authenticate, authorize('admin'), (req, res) => {
  res.json(users);
});
