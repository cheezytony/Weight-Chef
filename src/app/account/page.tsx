import React, { useState, useEffect } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Text, Stack } from '@chakra-ui/react';

const AccountPage: React.FC = () => {
  const [accountInfo, setAccountInfo] = useState({
    username: '',
    email: '',
    balance: 0,
    recentTransactions: [],
  });

  useEffect(() => {
    // Fetch the account details here and populate the form
    const fetchAccountDetails = async () => {
      // Example of fetching account info
      const userData = {
        username: 'existing_username',
        email: 'user@example.com',
        balance: 5000, // Example balance
        recentTransactions: [
          { id: 1, amount: -200, description: 'Purchase' },
          { id: 2, amount: 1000, description: 'Deposit' },
        ],
      };

      setAccountInfo(userData);
    };

    fetchAccountDetails();
  }, []);

  const handleUpdate = () => {
    // Handle account update logic here
    console.log('Updated Account:', accountInfo);
  };

  return (
    <Box>
      <Stack spacing={4}>
        <FormControl>
          <FormLabel htmlFor="username">Username</FormLabel>
          <Input
            id="username"
            value={accountInfo.username}
            onChange={(e) => setAccountInfo({ ...accountInfo, username: e.target.value })}
            placeholder="Enter your username"
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            value={accountInfo.email}
            onChange={(e) => setAccountInfo({ ...accountInfo, email: e.target.value })}
            placeholder="Enter your email"
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="balance">Account Balance</FormLabel>
          <Input id="balance" value={`$${accountInfo.balance}`} isReadOnly />
        </FormControl>

        <Text mt={4} fontSize="lg">
          Recent Transactions:
        </Text>
        <Stack spacing={2}>
          {accountInfo.recentTransactions.map((txn) => (
            <Box key={txn.id} border="1px" borderRadius="md" padding="4">
              <Text>
                {txn.description} -{' '}
                <Text as="span" color={txn.amount < 0 ? 'red.500' : 'green.500'}>
                  {txn.amount < 0 ? '-' : '+'}${Math.abs(txn.amount)}
                </Text>
              </Text>
            </Box>
          ))}
        </Stack>

        <Button mt={4} colorScheme="blue" onClick={handleUpdate}>
          Update Account
        </Button>
      </Stack>
    </Box>
  );
};

export default AccountPage;
