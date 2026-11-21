// React
import { ReactElement, useState } from 'react';

// MUI
import { LineChart } from '@mui/x-charts/LineChart';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

// Custom
import Analytics from '../../classes/Analytics';

// Styles
import './PartialLines.css';

interface Props {
    analytics: Analytics;
    startDate: Date;
    endDate: Date;
}

const PartialLines = ({
    analytics,
    startDate,
    endDate,
}: Props): ReactElement => {
    const [scatterSelection, setScatterSelection] = useState<
        'totalSpend' | 'totalOrders' | 'totalItemsPurchased'
    >('totalSpend');
    const [listSelection, setListSelection] = useState<
        'days-with-purchases' | 'days-without-purchases'
    >('days-with-purchases');

    return (
        <section className="PartialLines">
            <div className="heading">
                <h2>Activity</h2>
                <FormControl
                    variant="standard"
                    size="small"
                    sx={{ minWidth: 150 }}
                >
                    <Select
                        sx={{ color: 'var(--primary-font-color)' }}
                        value={scatterSelection}
                        onChange={(e) =>
                            setScatterSelection(
                                e.target.value as
                                    | 'totalSpend'
                                    | 'totalOrders'
                                    | 'totalItemsPurchased'
                            )
                        }
                        inputProps={{
                            name: 'Activity by',
                            id: 'uncontrolled-native',
                        }}
                    >
                        <MenuItem value="totalSpend">by Total Spend</MenuItem>
                        <MenuItem value="totalOrders">by Total Orders</MenuItem>
                        <MenuItem value="totalItemsPurchased">
                            by Total Items
                        </MenuItem>
                    </Select>
                </FormControl>
            </div>
            <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12, 15, 16] }]}
                series={[
                    {
                        data: [2, 5.5, 2, 8.5, 1.5, 5],
                        valueFormatter: (value) =>
                            value == null ? 'NaN' : value.toString(),
                    },
                    {
                        data: [null, null, null, null, 5.5, 2, 8.5, 1.5, 5],
                    },
                    {
                        data: [7, 8, 5, 4, null, null, 2, 5.5, 1],
                        valueFormatter: (value) =>
                            value == null ? '?' : value.toString(),
                    },
                ]}
                height={200}
                margin={{ bottom: 10 }}
            />
            <div className="overlay"></div>
        </section>
    );
};

export default PartialLines;
