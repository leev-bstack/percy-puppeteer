import * as Puppeteer from 'puppeteer';
import { SnapshotOptions } from '@percy/core';

export default function percySnapshot(
  page: any,
  name: string,
  options?: SnapshotOptions
): Promise<void>;
