// casl-rules.js
const { AbilityBuilder, Ability } = require("@casl/ability");

function defineRulesFor(user) {
  const { can, cannot, build } = new AbilityBuilder(Ability);

  if (user.role === "admin") {
    can("manage", "all");
  } else if (user.role === "owner") {
    can("manage", "Book", { ownerId: user.id });
    cannot("delete", "Book", { approved: true });
  } else {
    can("read", "Book", { approved: true });
  }

  return build();
}

module.exports = { defineRulesFor };
