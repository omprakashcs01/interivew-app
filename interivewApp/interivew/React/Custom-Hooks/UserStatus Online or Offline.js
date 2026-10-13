import { useState, useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';

const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(true); // Initialize with true for default behavior

  // Function to handle network change events
  const handleNetworkChange = (networkState) => {
    setIsOnline(networkState.isConnected);
  };

  // Effect to subscribe to network state changes
  useEffect(() => {
    // Subscribe to network state changes
    const unsubscribe = NetInfo.addEventListener(handleNetworkChange);

    // Fetch initial network state
    NetInfo.fetch().then(handleNetworkChange);

    return () => {
      // Cleanup subscription on component unmount
      unsubscribe();
    };
  }, []);

  return isOnline;
};

export default useOnlineStatus;
