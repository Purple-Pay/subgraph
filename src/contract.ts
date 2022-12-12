import {
	MerchatWalletCreated as MerchatWalletCreatedEvent,
	OwnershipTransferred as OwnershipTransferredEvent,
} from "../generated/Contract/Contract";
import {
	MerchatWalletCreated,
	OwnershipTransferred,
} from "../generated/schema";
import { Merchant } from "../generated/templates";

export function handleMerchatWalletCreated(
	event: MerchatWalletCreatedEvent
): void {
	let entity = new MerchatWalletCreated(
		event.transaction.hash.concatI32(event.logIndex.toI32())
	);
	entity.merchantAddress = event.params.merchantAddress;
	entity.merchantWallet = event.params.merchantWallet;

	entity.blockNumber = event.block.number;
	entity.blockTimestamp = event.block.timestamp;
	entity.transactionHash = event.transaction.hash;

	entity.save();

	Merchant.create(event.params.merchantWallet);
}

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
