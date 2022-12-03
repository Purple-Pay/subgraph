import {
	OwnershipTransferred as OwnershipTransferredEvent,
	PaymentRecieved as PaymentRecievedEvent,
} from "../generated/templates/merchant/merchant";
import { OwnershipTransferred, PaymentRecieved } from "../generated/schema";

export function handleOwnershipTransferred(
	event: OwnershipTransferredEvent
): void {
	let entity = new OwnershipTransferred(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.previousOwner = event.params.previousOwner;
	entity.newOwner = event.params.newOwner;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}

export function handlePaymentRecieved(event: PaymentRecievedEvent): void {
	let entity = new PaymentRecieved(event.transaction.hash);
	entity.orderId = event.params.orderId;
	entity.amount = event.params.amount;
	entity.sender = event.params.sender;
	entity.merchantWallet = event.params.merchant;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();
}
