import PropTypes from 'prop-types';
import { Body, BodyRow, BodyRowItem, Cap, ItemCap, TitleItemCap, TransactionsTable } from './TransactionHistory.styled';

export function TransactionHistory({ items }) {
    return (
        <TransactionsTable>
            <Cap>
                <ItemCap>
                    <TitleItemCap>Type</TitleItemCap>
                    <TitleItemCap>Amount</TitleItemCap>
                    <TitleItemCap>Currency</TitleItemCap>
                </ItemCap>
            </Cap>
            <Body>
                {items.map(({id, type,amount, currency}, index) => {
                    return (
                        <BodyRow key={id} index={index}>
                            <BodyRowItem>{type}</BodyRowItem>
                            <BodyRowItem>{amount}</BodyRowItem>
                            <BodyRowItem>{currency}</BodyRowItem>
                        </BodyRow>
                    );
                })}
            </Body>
        </TransactionsTable>
    );
   }


   TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};