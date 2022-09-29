
import {
  Box,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import customers from '../../__mocks__/customers'

export const Ranking = (props) => (
  <Card {...props}>
    <CardHeader title="Ranking" />
    <Box>
      <Table size="small" aria-label="a dense table">
        <TableHead sx={{ backgroundColor: "background.dark" }}>
          <TableRow>
            <TableCell style={{ color: "#9b9ea3" }}>Position</TableCell>
            <TableCell style={{ color: "#9b9ea3" }}>Name</TableCell>
            <TableCell style={{ color: "#9b9ea3" }}>Tasks</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((customer) => (
            <TableRow key={customer.id}>
              <TableCell>{customer.position}</TableCell>
              <TableCell>{customer.name}</TableCell>
              <TableCell style={{ color: "#9b9ea3" }}>{customer.tasks}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  </Card>
);
