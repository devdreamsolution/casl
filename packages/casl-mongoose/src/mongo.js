import { rulesToQuery } from '@casl/ability/extra';

function ruleToMongoQuery(rule) {
  return rule.inverted ? { $nor: [rule.conditions] } : rule.conditions;
}

export function toMongoQuery(rules) {
  return rulesToQuery(rules, ruleToMongoQuery);
}
