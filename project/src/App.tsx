import React, { useState } from 'react';
import { Power, Usb, Wifi, WifiOff, Circle, Zap, Settings } from 'lucide-react';

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [isPowerOn, setIsPowerOn] = useState(false);
  const [comPort, setComPort] = useState('COM3');
  const [selectedOutput, setSelectedOutput] = useState(1);
  const [voltageValue, setVoltageValue] = useState('12.0');
  const [isSettingVoltage, setIsSettingVoltage] = useState(false);

  const handleComPortToggle = () => {
    setIsConnected(!isConnected);
  };

  const handlePowerToggle = () => {
    if (isConnected) {
      setIsPowerOn(!isPowerOn);
    }
  };

  const handleVoltageSet = async () => {
    if (!isConnected || !isPowerOn) return;
    
    setIsSettingVoltage(true);
    
    try {
      // Construct the CLI command: V<n> <nrf> - Set output <n> to <nrf> Volts
      const command = `V${selectedOutput} ${voltageValue}`;
      
      // In a real implementation, you would call your CLI command here
      // For now, we'll simulate the command execution
      console.log(`Executing CLI command: ${command}`);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would integrate with your actual CLI/API
      // Example: await executeCliCommand(command);
      
    } catch (error) {
      console.error('Failed to set voltage:', error);
    } finally {
      setIsSettingVoltage(false);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-900 via-purple-800 to-indigo-900 flex items-center justify-center p-6">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-violet-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-purple-200 rounded-full blur-2xl"></div>
      </div>

      <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 w-full max-w-md shadow-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl mb-4 shadow-lg">
            <Usb className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">EHS Remote Control</h1>
          <p className="text-violet-200 text-sm">Power Supply Controller</p>
        </div>

        {/* Status Indicator */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2 border border-white/20">
            <Circle 
              className={`w-3 h-3 ${
                isConnected ? 'text-green-400 fill-current' : 'text-red-400 fill-current'
              }`} 
            />
            <span className="text-white text-sm font-medium">
              {isConnected ? 'Connected' : 'Disconnected'}
            </span>
          </div>
        </div>

        {/* COM Port Control */}
        <div className="mb-8">
          <label className="block text-violet-200 text-sm font-medium mb-3">COM Port Connection</label>
          <div className="flex items-center space-x-3">
            <select 
              value={comPort}
              onChange={(e) => setComPort(e.target.value)}
              className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-violet-200 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 backdrop-blur-sm"
              disabled={isConnected}
            >
              <option value="COM1">COM1</option>
              <option value="COM2">COM2</option>
              <option value="COM3">COM3</option>
              <option value="COM4">COM4</option>
              <option value="COM5">COM5</option>
            </select>
            <button
              onClick={handleComPortToggle}
              className={`flex items-center justify-center w-14 h-14 rounded-xl transition-all duration-300 shadow-lg ${
                isConnected
                  ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 hover:scale-105'
                  : 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 hover:scale-105'
              }`}
            >
              {isConnected ? (
                <WifiOff className="w-6 h-6 text-white" />
              ) : (
                <Wifi className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
          <p className="text-violet-300 text-xs mt-2">
            {isConnected ? `Connected to ${comPort}` : 'Select port and connect'}
          </p>
        </div>

        {/* Power Control */}
        <div className="mb-6">
          <label className="block text-violet-200 text-sm font-medium mb-4">Power Supply Control</label>
          <div className="text-center">
            <button
              onClick={handlePowerToggle}
              disabled={!isConnected}
              className={`inline-flex items-center justify-center w-24 h-24 rounded-full transition-all duration-500 shadow-2xl ${
                !isConnected
                  ? 'bg-gray-600 cursor-not-allowed opacity-50'
                  : isPowerOn
                  ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 hover:scale-110 animate-pulse'
                  : 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 hover:scale-110'
              }`}
            >
              <Power 
                className={`w-10 h-10 transition-colors duration-300 ${
                  isPowerOn ? 'text-white' : 'text-gray-300'
                }`} 
              />
            </button>
            <div className="mt-4">
              <p className={`text-lg font-semibold ${
                isPowerOn ? 'text-green-400' : 'text-gray-400'
              }`}>
                {isPowerOn ? 'POWER ON' : 'POWER OFF'}
              </p>
              <p className="text-violet-300 text-xs mt-1">
                {!isConnected ? 'Connect to COM port first' : 'Click to toggle power'}
              </p>
            </div>
          </div>
        </div>

        {/* System Info */}
        <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-violet-300 block">Status:</span>
              <span className={`font-medium ${
                isPowerOn ? 'text-green-400' : 'text-gray-400'
              }`}>
                {isPowerOn ? 'Active' : 'Standby'}
              </span>
            </div>
            <div>
              <span className="text-violet-300 block">Port:</span>
              <span className="text-white font-medium">{isConnected ? comPort : 'None'}</span>
            </div>
            <div>
              <span className="text-violet-300 block">Voltage:</span>
              <span className={`font-medium ${
                isPowerOn ? 'text-white' : 'text-gray-400'
              }`}>
                {isPowerOn ? `${voltageValue}V` : '0.0V'}
              </span>
            </div>
            <div>
              <span className="text-violet-300 block">Current:</span>
              <span className={`font-medium ${
                isPowerOn ? 'text-white' : 'text-gray-400'
              }`}>
                {isPowerOn ? '2.5A' : '0.0A'}
              </span>
            </div>
            <div>
              <span className="text-violet-300 block">Output:</span>
              <span className={`font-medium ${
                isPowerOn ? 'text-white' : 'text-gray-400'
              }`}>
                {isPowerOn ? `CH${selectedOutput}` : 'None'}
              </span>
            </div>
            <div>
              <span className="text-violet-300 block">Command:</span>
              <span className={`font-mono text-xs ${
                isPowerOn ? 'text-violet-200' : 'text-gray-400'
              }`}>
                {isPowerOn ? `V${selectedOutput} ${voltageValue}` : 'N/A'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;