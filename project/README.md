# EHS Remote Control Power Supply Interface

A modern web-based interface for controlling EHS Remote Control Power Supply units via COM port communication.

## Features

- **COM Port Management**: Connect/disconnect to serial ports (COM1-COM5)
- **Power Supply Control**: Master power on/off functionality
- **Voltage Control**: Set precise voltage values (0-30V) on multiple outputs
- **Output Channel Selection**: Control up to 4 different output channels
- **Quick Presets**: One-click voltage presets (3.3V, 5.0V, 12.0V, 24.0V)
- **Real-time Status**: Live monitoring of connection, power, voltage, and current
- **Modern UI**: Beautiful violet gradient design with glassmorphism effects

## CLI Command Integration

The interface integrates with your power supply's CLI commands:
- `V<n> <nrf>` - Set output `<n>` to `<nrf>` Volts
- Example: `V2 12.5` sets output 2 to 12.5 volts

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Static hosting compatible

## Getting Started

### Prerequisites

- Node.js 16+ and npm
- Access to EHS Remote Control Power Supply unit
- Available COM port for serial communication

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd ehs-remote-control
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

## Usage

1. **Connect to COM Port**: Select your COM port and click the connect button
2. **Power On**: Click the large power button to enable the power supply
3. **Select Output**: Choose which output channel to control (1-4)
4. **Set Voltage**: Enter desired voltage or use quick presets
5. **Apply**: Click "Set Voltage" to execute the CLI command

## Deployment Options

### GitHub Pages
1. Build the project: `npm run build`
2. Deploy the `dist` folder to GitHub Pages

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Vercel
1. Import your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration

## Development

### Project Structure
```
src/
├── App.tsx          # Main application component
├── main.tsx         # Application entry point
├── index.css        # Global styles and Tailwind imports
└── vite-env.d.ts    # Vite type definitions
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For issues and questions, please open an issue on the GitHub repository.