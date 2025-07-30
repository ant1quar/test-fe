const user = {
  name: "Ivanov Ivan",
  isVip: true,
  features: [
    {
      label: "Simple feature",
      isVip: false,
    },
    {
      label: "Premium feature",
      isVip: false,
    },
  ],
  isPremium: function () {
    return this.features.some(function (feature) {
      return feature.isVip || this.isVip;
    });
  },
};
user.isPremium();

