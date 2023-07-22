import { UserProfile } from './UserProfile/UserProfile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { Transactions } from './Transactions/Transactions';

import user from 'json/user.json';
import data from 'json/data.json';
import friends from 'json/friends.json';
import transactions from 'json/transactions.json';

// console.log(transactions);

// console.log(user);

export const App = () => {
  return (
    <>
      <UserProfile {...user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <Transactions items={transactions} />;
    </>
  );
};
